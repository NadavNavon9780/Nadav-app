export interface ArtObject {
  title: string;
  artistDisplayName: string;
  primaryImageSmall: string;
  objectDate: string;
  medium: string;
  culture: string;
}

const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

export async function getArtData(
  departmentId: string,
  count: number
): Promise<ArtObject[]> {
  try {
    // fetch all object IDs for the given department
    const resIds = await fetch(
      `${BASE_URL}/objects?departmentIds=${departmentId}`
    );
    if (!resIds.ok) throw new Error("Failed to fetch object list");
    const idsData = await resIds.json();

    if (!idsData.objectIDs || idsData.objectIDs.length === 0) {
      throw new Error("No art found for this department.");
    }

    // randomly select 'count' IDs
    const chosenIds = idsData.objectIDs
      .sort(() => 0.5 - Math.random())
      .slice(0, count);

    // fetch object details for selected IDs
    const artPromises = chosenIds.map(async (id: number) => {
      const resObj = await fetch(`${BASE_URL}/objects/${id}`);
      if (!resObj.ok) throw new Error(`Error fetching object ${id}`);
      const obj = await resObj.json();

      return {
        title: obj.title || "Untitled",
        artistDisplayName: obj.artistDisplayName || "Unknown artist",
        primaryImageSmall: obj.primaryImageSmall || "",
        objectDate: obj.objectDate || "Unknown date",
        medium: obj.medium || "Unknown medium",
        culture: obj.culture || "Unknown culture",
      };
    });

    // return simplified array
    return await Promise.all(artPromises);
  } catch (err: any) {
    console.error(err);
    throw new Error(err.message || "Failed to fetch art data.");
  }
}

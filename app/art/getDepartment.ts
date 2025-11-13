const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

export async function getDepartmentName(departmentId: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/departments`);
  if (!res.ok) throw new Error("Failed to fetch departments");

  const data = await res.json();
  // data.departments is an array of objects {departmentId, displayName}
  const department = data.departments.find(
    (d: any) => d.departmentId.toString() === departmentId
  );

  return department?.displayName || "Unknown Department";
}

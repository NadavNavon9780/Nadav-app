import { getArtData } from "./getArtData";
import styles from "./artPage.module.css";
import { getDepartmentName } from "./getDepartment";

export default async function ArtPage() {
  const departmentId = "1";
  const art = await getArtData(departmentId, 6); // Fetches on server before render
  const departmentTitle = await getDepartmentName(departmentId);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Department: {departmentTitle}</h1>

      <div className={styles.grid}>
        {art.map((item, index) => (
          <div key={index} className={styles.card}>
            <img
              src={item.primaryImageSmall || "/placeholder.jpg"}
              alt={item.title}
              className={styles.image}
            />
            <h2 className={styles.titleText}>{item.title}</h2>
            <p className={styles.artist}>{item.artistDisplayName}</p>
            <p>
              <strong>Date:</strong> {item.objectDate}
            </p>
            <p>
              <strong>Medium:</strong> {item.medium}
            </p>
            <p>
              <strong>Culture:</strong> {item.culture}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

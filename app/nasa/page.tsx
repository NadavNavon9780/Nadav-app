import styles from "./page.module.css";

export default async function Demos() {
  const data = await getDataForChart(1);
  console.log(data);
  return (
    <main>
      <h1 className={styles.hey}>Hey {}</h1>
    </main>
  );
}

export async function getDataForChart(count: number) {
  const dataEndpoint = `https://api.nasa.gov/planetary/apod?count=${count}`;
  const res = await fetch(dataEndpoint);
  const rawData = await res.json();
  console.log(rawData);

  // const data = rawData.rows.map((item: RawDataRow) => {
  //   return {
  //     name: item.func_cls_title_2[0],
  //     code: item.code,
  //     amount: item.net_allocated,
  //   };
  // });
  return rawData;
}

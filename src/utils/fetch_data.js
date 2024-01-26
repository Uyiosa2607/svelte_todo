import axios from "axios";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWExNDM5MTliYTJjOGFkNjQzMDdmYTFhMzJiN2FhYiIsInN1YiI6IjY1YjJlMzRkNGEwYjE5MDE2YmNhYjE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaMOYkLIn-kWizQo64gneIDotYzdDM7CE1f1uma2yss",
  "Content-Type": "application/json",
};


async function fetchData(url) {
  try {
    const res = await axios.get(url, { headers });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;
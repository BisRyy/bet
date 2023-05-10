import axios from "axios";

export default function Movies() {

    const createTest = async () => {
        const randomNum = Math.floor(Math.random() * 1000);
        const res = await axios.post('/api/posts', {
            name: `Test ${randomNum}`,
            email: `test${randomNum}@test.com`,
        });
        const { data } = res;
        console.log(data);
      };

    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <button type="submit" onClick={createTest}>Create Test</button>
            {/* <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        <h2>{course.name}</h2>
                        <h3>{course.description}</h3>
                        <p>{course.price}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

const interests = [
    "Tennis & Pickleball",
    "Exploring National Parks",
    "Reading",
];


export default function Interests() {
    return (
        <div className="about-section">
            <h3>Beyond Work</h3>

            <ul className="interest-list">

                {interests.map((interest) => (
                    <li key={interest}>
                        {interest}
                    </li>
                ))}

            </ul>

        </div>
    );
}
const books = [
    "The Inner Game of Tennis",
    "The Options Edge",
    "Principles for Navigating Big Debt Crises",
];

export default function ReadingList() {
    return (
        <div className="reading-list-container">

            <h3 className="reading-title">
                Currently Reading
            </h3>

            <ul className="reading-list">

                {books.map((book) => (
                    <li key={book}>
                        {book}
                    </li>
                ))}

            </ul>

        </div>
    );
}
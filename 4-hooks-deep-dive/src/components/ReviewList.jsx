const ReviewList = ({ reviews }) => {
    return (
        <div>
            {reviews.map((review, index) => (
                <div key={index}>
                    <span>{"⭐".repeat(review.rating)}</span>
                    <p>{review.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ReviewList;
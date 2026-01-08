
const ReviewForm = ({ onAddReview }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const newReviewData = {
            text: form.reviewText.value,
            rating: Number(form.ratingSelect.value)
        };

        onAddReview(newReviewData);
        form.reviewText.value = "";
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Write a Review</h3>

            <select name="ratingSelect">
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
            </select>

            <input
                type="text"
                name="reviewText"
                placeholder="What did you think?"
            />

            <button type="submit">Submit Review</button>
        </form>
    );
}

export default ReviewForm;
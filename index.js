let userRating;

const $name = document.querySelector("#name");
const $email = document.querySelector("#email");
const $rating = document.querySelector("#rating");
const $comment = document.querySelector("#comment");

const $userRating = document.querySelector(".user-rating");

function enviar() {
  const $userRatingName = document.querySelector("#user-rating-name");
  const $userRatingEmail = document.querySelector("#user-rating-email");
  const $userRatingValue = document.querySelector("#user-rating-value");
  const $userRatingComment = document.querySelector("#user-rating-comment");

  userRating = {
    name: $name.value,
    email: $email.value,
    rating: $rating.value,
    comment: $comment.value,
  };

  $userRatingName.innerHTML = `Nome: ${userRating.name}`;
  $userRatingEmail.innerHTML = `Email: ${userRating.email}`;
  $userRatingValue.innerHTML = `Você avaliou com ${userRating.rating}/10`;
  $userRatingComment.innerHTML = userRating.comment;
}

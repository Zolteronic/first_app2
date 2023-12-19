export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <h2s>{drink.name}</h2s>
      <img src={drink.imgUrl} alt={drink.alt} width="100px" height="100px" />
      <p>Your drink will be ready in 5 minutes</p>
    </>
  );
};

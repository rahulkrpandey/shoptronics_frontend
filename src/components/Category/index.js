import {
  Container,
  CategoryItem,
  Title,
  Image,
  CategoryItemContainer,
  Heading,
} from "./StyledCategory";

const Category = ({ data }) => {
  return (
    <Container>
      <Heading>shop by categories</Heading>
      <CategoryItem>
        {data.map((info) => (
          <CategoryItemContainer key={info.id} url={`/products/${info.cat}`}>
            <Image src={info.img} />
            <Title>{info.title}</Title>
          </CategoryItemContainer>
        ))}
      </CategoryItem>
    </Container>
  );
};

export default Category;

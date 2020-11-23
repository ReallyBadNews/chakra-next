import { Flex, Heading } from "@chakra-ui/core";

export const Hero = ({ title }: { title: string }): any => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "Hello, world!",
};

import {
  CardHeader,
  CardFooter,
  Text,
  CardBody,
  Card,
  Button,
  Heading,
} from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md"> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>Welcome to your dashboard.</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">View here</Button>
      </CardFooter>
    </Card>
  );
};

export default Dashboard;

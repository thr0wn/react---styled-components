import React from "react";
import ThemeProvider from "@/src/Theme";
import Cards from "@/src/components/Cards";
import Card from "@/src/components/Card";
import CardHeader from "@/src/components/Card/CardHeader";
import CardBody from "@/src/components/Card/CardBody";
import CardFooter from "@/src/components/Card/CardFooter";
import Tag from "@/src/components/Tag";
import Text from "@/src/components/Text";

const App = () => (
  <ThemeProvider>
    <Cards>
      <Card>
        <CardHeader>
          <Text fontSize="medium">
            BILL&nbsp;
            <Text fontSize="small" color="grey">
              NOV 19
            </Text>
          </Text>
          <Tag>Paid</Tag>
        </CardHeader>
        <CardBody>
          <div>
            <Text fontFamily="medium" fontSize="large">
              295&nbsp;
              <Text fontSize="xsmall" color="grey">
                MB
              </Text>
            </Text>
            <Text fontSize="xsmall" color="grey2">
              $&nbsp;
              <Text fontSize="medium" color="green">
                47,32
              </Text>
            </Text>
          </div>
          <div>
            <Text fontSize="small" color="grey">
              EXPIRATION
            </Text>
            <Text fontSize="medium">
              05/01&nbsp;<Text>Wednesday</Text>
            </Text>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Text fontSize="medium">
            BILL&nbsp;
            <Text fontSize="small" color="grey">
              DEC 20
            </Text>
          </Text>
          <Tag style={{ backgroundColor: "red" }}>Expired</Tag>
        </CardHeader>
        <CardBody>
          <div>
            <Text fontFamily="medium" fontSize="large">
              237&nbsp;
              <Text fontSize="xsmall" color="grey">
                MB
              </Text>
            </Text>
            <Text fontSize="xsmall" color="grey2">
              $&nbsp;
              <Text fontSize="medium" color="red">
                41,19
              </Text>
            </Text>
          </div>
          <div>
            <Text fontSize="small" color="grey">
              EXPIRATION
            </Text>
            <Text fontSize="medium">
              05/02&nbsp;<Text>Sunday</Text>
            </Text>
          </div>
        </CardBody>
        <CardFooter>
          <Text color="green" fontSize="small">
            Pay
          </Text>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Text fontSize="medium">
            BILL&nbsp;
            <Text fontSize="small" color="grey">
              JAN 20
            </Text>
          </Text>
          <Tag style={{ backgroundColor: "purple" }}>Open</Tag>
        </CardHeader>
        <CardBody>
          <div>
            <Text fontFamily="medium" fontSize="large">
              300&nbsp;
              <Text fontSize="xsmall" color="grey">
                MB
              </Text>
            </Text>
            <Text fontSize="xsmall" color="grey2">
              $&nbsp;
              <Text fontSize="medium" color="purple">
                4,65
              </Text>
            </Text>
          </div>
          <div>
            <Text fontSize="small" color="grey">
              EXPIRATION
            </Text>
            <Text fontSize="medium">
              05/03&nbsp;<Text>Wednesday</Text>
            </Text>
          </div>
        </CardBody>
      </Card>
    </Cards>
  </ThemeProvider>
);

export default App;

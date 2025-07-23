import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";

export const EmailTemplate = ({
  response,
}) => (
    <Html>
    <Head />
    <Preview>Yelp recent login</Preview>
    <Body style={main}>
      <Container>
       

        <Section style={content}>
          <Row>
            
          </Row>

          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >

                2005ayushpanda@gmail.com
                Hi {response?.emailToSend?.split("@")[0]},
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                We noticed a recent login to your Yelp account.
              </Heading>

              <Text style={paragraph}>
                <b>File Name : {response.fileName} </b>
                
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>File Size : {response.fileSize}</b>
                
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>File Type : {response.fileType}</b>
                
              </Text>
              <Text
                style={{
                  color: "rgb(0,0,0, 0.5)",
                  fontSize: 14,
                  marginTop: -5,
                }}
              >
                Access and Download file on your own risk
                
              </Text>

              <Text style={paragraph}>
              Now you can also share files with Panweb
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                Click below button to access your file
              </Text>
            </Column>
          </Row>

          <a href={response.shortUrl}>Click To Download</a>
          <Row style={{  paddingTop: '0' }}>
            <Column style={containerButton} colSpan={2}>
              <Button style={button}
              href={response.shortUrl}
              >Click here to Download</Button>
            </Column>
          </Row>
        </Section>

        <Section style={containerImageFooter}>
         
        </Section>

        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(0,0,0, 0.7)",
          }}
        >
          © 2025 | Panweb Co, 350 Mission Street, San Francisco, CA 94105,
          U.S.A. | www.yelp.com
        </Text>
      </Container>
    </Body>
  </Html>
);


const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
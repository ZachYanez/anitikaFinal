import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function pubcard() {
  return (
    <div>
      <Card>
        <Card.Header>Featured in Medium</Card.Header>
        <Card.Body>
          <Image className="w-75" src="https://miro.medium.com/max/700/1*iE3H9GzwCT3gGySelXvlBQ.jpeg" rounded />
          <Card.Title>Abyon Ausar McInnis: Marketing Specialist, Brand Ambassador, & Emerging Actor.</Card.Title>
          <Card.Text></Card.Text>
          <Button
            target="_blank"
            href="https://medium.com/@antisocialmarketing/abyon-ausar-mcinnis-marketing-specialist-brand-ambassador-emerging-actor-35611ac83b59"
            variant="light"
          >
            Read on Medium
          </Button>
        </Card.Body>
      </Card>
      <br />

      <br />

      <Card>
        <Card.Header>Ruffled Blog</Card.Header>
        <Card.Body>
          <Image
            className="w-75"
            src="https://1z30b13mfvdj2ixk6z3i8rfx-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/champagne-velvet-lunaria-wedding-inspiration-05-740x994.jpg"
            rounded
          />
          <Card.Title>Prospect House Wedding</Card.Title>
          <Card.Text></Card.Text>
          <Button
            target="_blank"
            href="https://ruffledblog.com/prospect-house-wedding-inspiration-yellow-palette/"
            variant="light"
          >
            See the set on Ruffled
          </Button>
        </Card.Body>
      </Card>

      <br />

      <Card>
        <Card.Header>Fear the Walking Dead</Card.Header>
        <Card.Body>
          <Image
            className="w-75"
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/Christine-Evangelista-and-Masked-Figure-in-Fear-The-Walking-Dead.jpg?q=50&fit=crop&w=960&h=500"
            rounded
          />
          <Card.Title>Fear the Walking Dead Season 6. Who's In The Creepy White Mask</Card.Title>
          <Card.Text></Card.Text>
          <Button target="_blank" href="https://screenrant.com/fear-walking-dead-season-6-white-mask-character/" variant="light">
            See this on Screen Rant
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

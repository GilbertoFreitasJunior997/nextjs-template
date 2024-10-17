"use client";

import { Accordion } from "@/components/accordion";

export const AccordionSample = () => {
  return (
    <div>
      Accordion
      <Accordion.Root type="single">
        <Accordion.Item value="first">
          <Accordion.Trigger>Hello!</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            eveniet tempore voluptatem ipsam dolorum consectetur corrupti
            aspernatur, temporibus quod quasi sequi sunt aliquam animi
            repellendus? Omnis sed laudantium voluptates repellendus!
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="second">
          <Accordion.Trigger>Hello!</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            eveniet tempore voluptatem ipsam dolorum consectetur corrupti
            aspernatur, temporibus quod quasi sequi sunt aliquam animi
            repellendus? Omnis sed laudantium voluptates repellendus!
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="third">
          <Accordion.Trigger>Hello!</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            eveniet tempore voluptatem ipsam dolorum consectetur corrupti
            aspernatur, temporibus quod quasi sequi sunt aliquam animi
            repellendus? Omnis sed laudantium voluptates repellendus!
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

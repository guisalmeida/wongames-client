import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import Slider from '.';

const meta = {
  title: 'Slider',
  component: Slider
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Horizontal: Story = {
  args: {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    },
    children: [
      <Slide key="1">1</Slide>,
      <Slide key="2">2</Slide>,
      <Slide key="3">3</Slide>,
      <Slide key="4">4</Slide>,
      <Slide key="5">5</Slide>,
      <Slide key="6">6</Slide>
    ]
  },
  render: ({ settings, children }) => (
    <Slider settings={settings}>{children}</Slider>
  )
};

export const Vertical: Story = {
  args: {
    settings: {
      vertical: true,
      verticalSwiping: true,
      dots: true,
      infinite: false,
      slidesToShow: 1
    },
    children: [
      <Slide key="1">1</Slide>,
      <Slide key="2">2</Slide>,
      <Slide key="3">3</Slide>,
      <Slide key="4">4</Slide>,
      <Slide key="5">5</Slide>,
      <Slide key="6">6</Slide>
    ]
  },
  render: ({ settings, children }) => (
    <Slider settings={settings}>{children}</Slider>
  )
};

import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 m-16  first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline `;
const PrimaryLink = tw(Link)`bg-teal-500 text-gray-100 shadow-lg hocus:bg-teal-700 hocus:text-gray-200 `;

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-teal-500`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;

export default ({
  primaryLinkText = "Envoyer ma demande",
  primaryLinkUrl = "mailto:altercv45@gmail.com",
  subheading = "Faire une demande de redesign ",
  heading = (
    <>
      Accompagnement par un <span tw="text-teal-500">UX/UI Designer sans frais.</span>
    </>
  ),
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Bienvenue",
      description: "Sache que la plateforme est dédiée à tous les alternants ayant besoin d'accompagnement, peu importe le niveau d'études. Pas de robot, uniquement de l'humain."
    },
    {
      heading: "Formule ta demande",
      description: "Tu veux juste un redesign ? Tu veux juste un accompagnement ? ou les deux ? surtout n'hésites pas à bien formuler ta demande de la manière la plus claire possible."
    },
    {
      heading: "Active l'accompagnement via un mail",
      description: "Une fois ta demande bien formulée, n'oublie pas d'upload ton CV lors de l'envoi de ton mail."
    }
  ];

  if (!steps) steps = defaultSteps;

  return (
    
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Steps>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepNumber>{(index+1).toString().padStart(2,'0')}</StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                    <StepDescription>{step.description}</StepDescription>
                  </StepText>
                </Step> 
              ))}
            </Steps>
          </TextContent>
          <PrimaryLink href={primaryLinkUrl}>{primaryLinkText}</PrimaryLink>
        </TextColumn>
      </TwoColumn>
    </Container>
    
  );
};

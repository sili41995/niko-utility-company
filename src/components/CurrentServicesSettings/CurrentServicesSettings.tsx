import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import AddBtn from '../AddBtn';
import { BtnClickEvent } from '@/types/types';
import {
  Container,
  ServicesListItem,
  ServicesList,
  Title,
  ServiceText,
  InstructionWrap,
  InstructionTitle,
  Instruction,
  InstructionItem,
  InstructionText,
} from './CurrentServicesSettings.styled';

const CurrentServicesSettings: FC = () => {
  const onAddBntClick = (e: BtnClickEvent): void => {
    console.log(e);
    // console.log(e);
  };

  return (
    <Container>
      <SettingsSectionTitle title='Підприємство надає послуги:' />
      <AddBtn title='Нова подія' onClick={onAddBntClick} />
      <Title>Поточні послуги:</Title>
      <ServicesList>
        <ServicesListItem>
          <ServiceText>Останні зміни:</ServiceText>
          <ServiceText>Введеняя в експлуатацію</ServiceText>
        </ServicesListItem>
        <ServicesListItem>
          <ServiceText>Дата:</ServiceText>
          <ServiceText>01.01.2024</ServiceText>
        </ServicesListItem>
        <ServicesListItem>
          <ServiceText>Підстава:</ServiceText>
          <ServiceText>1 від 01.01.2024 Початок експлуатації</ServiceText>
        </ServicesListItem>
      </ServicesList>
      <InstructionWrap>
        <InstructionTitle>Поводження з побутовими відходами:</InstructionTitle>
        <Instruction>
          <InstructionItem>
            <InstructionText>
              Вивезення побутових відходів (б/с)
            </InstructionText>
          </InstructionItem>
          <InstructionItem>
            <InstructionText>
              Вивезення побутових відходів (п/с)
            </InstructionText>
          </InstructionItem>
          <InstructionItem>
            <InstructionText>
              Вивезення побутових відходів (за 1м3)
            </InstructionText>
          </InstructionItem>
        </Instruction>
      </InstructionWrap>
    </Container>
  );
};

export default CurrentServicesSettings;

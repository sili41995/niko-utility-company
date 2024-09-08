import { FC } from 'react';
import Input from '@/components/Input';
import { CheckboxNames, InputTypes, apartmentTypes, regExp } from '@/constants';
import {
  PersonParameters,
  SubscriberAccountContainer,
  AddressWrap,
  TypesWrap,
  ServicesWrap,
  Form,
  ServiceTitleWrap,
  SectionTitle,
  ServicesList,
  ServicesListTitle,
  ServicesListTitleWrap,
  ServiceName,
  ServiceListItem,
  PersonParametersWrap,
  CheckboxWrap,
  CheckboxName,
} from './EditSubscriberAccountForm.styled';
import Checkbox from '@/components/Checkbox';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Select from '@/components/Select';
import { IProps } from './EditSubscriberAccountForm.types';
import { useEditSubscriberAccountForm } from '@/hooks';

const EditSubscriberAccountForm: FC<IProps> = ({ subscriberAccount }) => {
  const {
    handleSubmit,
    handleFormSubmit,
    register,
    fullStreetName,
    house,
    apartment,
    contractDateValue,
    apartmentType,
    residents,
    period,
    isRemovalHouseHoldWaste,
    onCheckboxChange,
    surname,
    name,
    middleName,
    isEligibleForBenefit,
    phone,
    additionalPhone,
    email,
    birthday,
    isLoading,
    number,
  } = useEditSubscriberAccountForm(subscriberAccount);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <AddressWrap>
        <Input
          settings={{ ...register('street') }}
          label='Вулиця:'
          type={InputTypes.text}
          value={fullStreetName}
          width={550}
          horizontal
          disabled
        />
        <Input
          settings={{ ...register('house') }}
          label='Будинок:'
          type={InputTypes.text}
          value={house}
          width={550}
          horizontal
          disabled
        />
        <Input
          settings={{ ...register('apartment') }}
          label='№ квартири:'
          type={InputTypes.text}
          value={apartment}
          width={550}
          horizontal
          disabled
        />
      </AddressWrap>
      <SubscriberAccountContainer>
        <Input
          settings={{ ...register('number') }}
          label='Абонентський рахунок:'
          type={InputTypes.text}
          value={number}
          width={550}
          horizontal
          disabled
        />
        <Input
          settings={{ ...register('contractDate') }}
          label='від'
          type={InputTypes.text}
          value={contractDateValue}
          width={550}
          horizontal
          disabled
        />
      </SubscriberAccountContainer>
      <TypesWrap>
        <Select
          label='Тип приміщення:'
          settings={{ ...register('isLivingApartment', { required: true }) }}
          data={apartmentTypes}
          defaultValue={apartmentType}
          width={550}
          horizontal
        />
        <Input
          settings={{ ...register('residents', { required: true }) }}
          label='Мешканців:'
          type={InputTypes.number}
          defaultValue={String(residents)}
          width={550}
          horizontal
        />
      </TypesWrap>
      <ServicesWrap>
        <ServiceTitleWrap>
          <SectionTitle>Послуги:</SectionTitle>
          <Input
            settings={{ ...register('period', { required: true }) }}
            label='Послуги надаються з:'
            type={InputTypes.date}
            defaultValue={period}
            width={550}
            horizontal
          />
        </ServiceTitleWrap>
        <ServicesList>
          <ServicesListTitleWrap>
            <ServicesListTitle>
              Поводження з побутовими відходами:
            </ServicesListTitle>
          </ServicesListTitleWrap>
          <ServiceListItem>
            <ServiceName>Вивезення побутових відходів (б/с)</ServiceName>
            <Checkbox
              settings={{
                ...register('isRemovalHouseholdWaste'),
              }}
              checked={isRemovalHouseHoldWaste}
              onChange={onCheckboxChange}
              name={CheckboxNames.isRemovalHouseholdWaste}
            />
          </ServiceListItem>
        </ServicesList>
      </ServicesWrap>
      <PersonParametersWrap>
        <SectionTitle>Послуги:</SectionTitle>
        <PersonParameters>
          <Input
            settings={{ ...register('surname') }}
            label='Прізвище:'
            type={InputTypes.text}
            defaultValue={surname}
            width={550}
            horizontal
            disabled
          />
          <Input
            settings={{ ...register('name') }}
            label="Ім'я:"
            type={InputTypes.text}
            defaultValue={name}
            width={550}
            horizontal
            disabled
          />
          <Input
            settings={{ ...register('middleName') }}
            label='По-батькові:'
            type={InputTypes.text}
            defaultValue={middleName}
            width={550}
            horizontal
            disabled
          />
          <CheckboxWrap>
            <CheckboxName>Має право на пільгу</CheckboxName>
            <Checkbox
              settings={{
                ...register('isEligibleForBenefit'),
              }}
              checked={isEligibleForBenefit}
              onChange={onCheckboxChange}
              name={CheckboxNames.isEligibleForBenefit}
            />
          </CheckboxWrap>
          <Input
            settings={{
              ...register('phone', { required: true, pattern: regExp.phone }),
            }}
            label='Телефон:'
            type={InputTypes.text}
            defaultValue={phone}
            width={550}
            horizontal
          />
          <Input
            settings={{
              ...register('additionalPhone', {
                required: true,
                pattern: regExp.phone,
              }),
            }}
            label='Телефон додатковий:'
            type={InputTypes.text}
            defaultValue={additionalPhone}
            width={550}
            horizontal
          />
          <Input
            settings={{
              ...register('email', { pattern: regExp.email }),
            }}
            label='Email:'
            placeholder='Email'
            type={InputTypes.text}
            defaultValue={email}
            width={550}
            horizontal
          />
          <Input
            settings={{ ...register('birthday') }}
            label='День народження:'
            type={InputTypes.date}
            defaultValue={birthday}
            width={550}
            horizontal
          />
          <Input
            settings={{ ...register('name', { required: true }) }}
            label='Документ:'
            placeholder='Документ'
            type={InputTypes.text}
            width={550}
            horizontal
          />
          <Input
            settings={{ ...register('comment', { required: true }) }}
            label='Коментар:'
            placeholder='Коментар'
            type={InputTypes.text}
            width={550}
            horizontal
          />
        </PersonParameters>
      </PersonParametersWrap>
      <SubmitFormBtn title='Зберегти' isLoading={isLoading} />
    </Form>
  );
};

export default EditSubscriberAccountForm;

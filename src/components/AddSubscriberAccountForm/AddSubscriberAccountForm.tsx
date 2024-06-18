import { useAddSubscriberAccountForm } from '@/hooks';
import { FC } from 'react';
import Input from '../Input';
import { InputTypes, regExp } from '@/constants';
import {
  PersonParameters,
  SubscriberAccountContainer,
} from './AddSubscriberAccountForm.styled';
import Checkbox from '../Checkbox';
import SubmitFormBtn from '../SubmitFormBtn';
import Select from '../Select';

const AddSubscriberAccountForm: FC = () => {
  const {
    register,
    streets,
    houses,
    streetDefaultValue,
    currentDate,
    firstDayOfMonth,
    accountTypes,
    apartmentTypes,
    isLoading,
    handleFormSubmit,
    handleSubmit,
    checked,
    onCheckboxChange,
  } = useAddSubscriberAccountForm();
  // давай продолжим со стилей
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <p>
        Поточний період: <span>{currentDate}</span>
      </p>
      <SubscriberAccountContainer>
        {/* <Select
          label='_____'
          settings={_____}
          data={____}
        /> */}
        <Select
          label='Вулиця:'
          settings={{ ...register('street', { required: true }) }}
          defaultValue={streetDefaultValue}
          data={streets}
        />
        <Select
          label='Будинок:'
          settings={{ ...register('house', { required: true }) }}
          data={houses}
        />
        <Input
          settings={{ ...register('apartment', { required: true }) }}
          label='№ квартири:'
          placeholder='№ квартири'
          type={InputTypes.text}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{ ...register('subscriberAccount', { required: true }) }}
          label='Абон. рахунок №:'
          placeholder='Абон. рахунок №'
          type={InputTypes.text}
          accent={true}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{ ...register('contract', { required: true }) }}
          label='Договір №:'
          placeholder='Договір №'
          type={InputTypes.text}
          accent={true}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{ ...register('contractDate', { required: true }) }}
          label='від'
          type={InputTypes.date}
          defaultValue={firstDayOfMonth}
          horizontal={true}
          width={550}
        />
        <label>
          <span>Тип рахунку:</span>
          <select {...register('accountType', { required: true })}>
            {accountTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Тип приміщення:</span>
          <select {...register('isLivingApartment', { required: true })}>
            {apartmentTypes.map(({ title, value }) => (
              <option value={value} key={title}>
                {title}
              </option>
            ))}
          </select>
        </label>
        <Input
          settings={{ ...register('residents', { required: true }) }}
          label='Мешканців:'
          placeholder='Мешканців'
          type={InputTypes.number}
          horizontal={true}
          width={550}
        />
      </SubscriberAccountContainer>
      <div>
        <p>Послуги:</p>
        <Input
          settings={{ ...register('period', { required: true }) }}
          label='Послуги надаються з:'
          type={InputTypes.date}
          horizontal={true}
          width={550}
        />
      </div>
      <div>
        <p>- Вивезення побутових відходів (б/с)</p>
        <Checkbox
          settings={{
            ...register('isRemovalHouseholdWaste'),
          }}
          checked={checked}
          onChange={onCheckboxChange}
        />
      </div>
      <PersonParameters>
        <Input
          settings={{ ...register('utr', { required: true }) }}
          label='ІПН:'
          placeholder='ІПН'
          type={InputTypes.text}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{ ...register('passport', { required: true }) }}
          label='Паспорт:'
          placeholder='Паспорт'
          type={InputTypes.text}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{ ...register('surname', { required: true }) }}
          label='Прізвище:'
          placeholder='Прізвище'
          type={InputTypes.text}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{ ...register('name', { required: true }) }}
          label="Ім'я:"
          placeholder="Ім'я"
          type={InputTypes.text}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{ ...register('middleName', { required: true }) }}
          label='По-батькові:'
          placeholder='По-батькові'
          type={InputTypes.text}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{
            ...register('phone', { required: true, pattern: regExp.phone }),
          }}
          label='Телефон:'
          placeholder='Телефон'
          type={InputTypes.text}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{
            ...register('additionalPhone', {
              required: true,
              pattern: regExp.phone,
            }),
          }}
          label='Телефон додатковий:'
          placeholder='Телефон додатковий'
          type={InputTypes.text}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{
            ...register('email', { pattern: regExp.email }),
          }}
          label='Email:'
          placeholder='Email'
          type={InputTypes.text}
          horizontal={true}
          width={550}
        />
        <Input
          settings={{ ...register('birthday') }}
          label='День народження:'
          placeholder='День народження'
          type={InputTypes.date}
          horizontal={true}
          width={550}
        />
      </PersonParameters>
      <SubmitFormBtn title='Зберегти' disabled={isLoading} />
    </form>
  );
};

export default AddSubscriberAccountForm;

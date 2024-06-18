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

const AddSubscriberAccountForm: FC = () => {
  const {
    register,
    streets,
    houses,
    defaultValue,
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
        <label>
          <span>Вулиця:</span>
          <select
            {...register('street', { required: true })}
            defaultValue={defaultValue}
          >
            {streets.map(({ name, id, type }) => (
              <option value={id} key={id}>
                {`${type} ${name}`}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Будинок:</span>
          <select {...register('house', { required: true })}>
            {houses.map(({ id, number }) => (
              <option value={id} key={id}>
                {number}
              </option>
            ))}
          </select>
        </label>
        <Input
          settings={{ ...register('apartment', { required: true }) }}
          label='№ квартири:'
          type={InputTypes.text}
        />
        <Input
          settings={{ ...register('subscriberAccount', { required: true }) }}
          label='Абон. рахунок №:'
          type={InputTypes.text}
          accent={true}
        />
        <Input
          settings={{ ...register('contract', { required: true }) }}
          label='Договір №:'
          type={InputTypes.text}
          accent={true}
        />
        <Input
          settings={{ ...register('contractDate', { required: true }) }}
          label='від'
          type={InputTypes.date}
          defaultValue={firstDayOfMonth}
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
          type={InputTypes.number}
        />
      </SubscriberAccountContainer>
      <div>
        <p>Послуги:</p>
        <Input
          settings={{ ...register('period', { required: true }) }}
          label='Послуги надаються з:'
          type={InputTypes.date}
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
          type={InputTypes.text}
        />
        <Input
          settings={{ ...register('passport', { required: true }) }}
          label='Паспорт:'
          type={InputTypes.text}
        />
        <Input
          settings={{ ...register('surname', { required: true }) }}
          label='Прізвище:'
          type={InputTypes.text}
        />
        <Input
          settings={{ ...register('name', { required: true }) }}
          label="Ім'я:"
          type={InputTypes.text}
        />
        <Input
          settings={{ ...register('middleName', { required: true }) }}
          label='По-батькові:'
          type={InputTypes.text}
        />
        <Input
          settings={{
            ...register('phone', { required: true, pattern: regExp.phone }),
          }}
          label='Телефон:'
          type={InputTypes.text}
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
        />
        <Input
          settings={{
            ...register('email', { pattern: regExp.email }),
          }}
          label='Email:'
          type={InputTypes.text}
        />
        <Input
          settings={{ ...register('birthday') }}
          label='День народження:'
          type={InputTypes.date}
        />
      </PersonParameters>
      <SubmitFormBtn title='Зберегти' disabled={isLoading} />
    </form>
  );
};

export default AddSubscriberAccountForm;

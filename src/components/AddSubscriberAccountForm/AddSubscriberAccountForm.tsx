import { useAddSubscriberAccountForm } from '@/hooks';
import { FC } from 'react';
import Input from '../Input';
import { InputTypes } from '@/constants';
import {
  ApartmentParameters,
  SubscriberAccountContainer,
} from './AddSubscriberAccountForm.styled';

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
    individualHeating,
  } = useAddSubscriberAccountForm();

  return (
    <form>
      <p>
        Поточний період: <span>{currentDate}</span>
      </p>
      <SubscriberAccountContainer>
        <label>
          <span>Вулиця:</span>
          <select {...register('street')} defaultValue={defaultValue}>
            {streets.map(({ name, id, type }) => (
              <option value={id} key={id}>
                {`${type} ${name}`}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Будинок:</span>
          <select {...register('house')}>
            {houses.map(({ id, number }) => (
              <option value={id} key={id}>
                {number}
              </option>
            ))}
          </select>
        </label>
        <Input
          settings={{ ...register('apartment') }}
          label='№ квартири:'
          type={InputTypes.text}
        />
        <Input
          settings={{ ...register('subscriberAccount') }}
          label='Абон. рахунок №:'
          type={InputTypes.text}
          accent={true}
        />
        <Input
          settings={{ ...register('contract') }}
          label='Договір №:'
          type={InputTypes.text}
          accent={true}
        />
        <Input
          settings={{ ...register('contractDate') }}
          label='від'
          type={InputTypes.date}
          defaultValue={firstDayOfMonth}
        />
        <label>
          <span>Тип рахунку:</span>
          <select {...register('accountType')}>
            {accountTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Тип рахунку:</span>
          <select {...register('isLivingApartment')}>
            {apartmentTypes.map(({ title, value }) => (
              <option value={value} key={title}>
                {title}
              </option>
            ))}
          </select>
        </label>
        <Input
          settings={{ ...register('residents') }}
          label='Мешканців:'
          type={InputTypes.number}
        />
      </SubscriberAccountContainer>
      <ApartmentParameters>
        <Input
          settings={{ ...register('floor') }}
          label='Поверх:'
          type={InputTypes.number}
        />
        <Input
          settings={{ ...register('rooms') }}
          label='Кількість кімнат:'
          type={InputTypes.number}
        />
        <label>
          <span>Індивідуальне опалення:</span>
          <select {...register('individualHeating')}>
            {individualHeating.map(({ title, value }) => (
              <option value={value} key={title}>
                {title}
              </option>
            ))}
          </select>
        </label>
      </ApartmentParameters>
    </form>
  );
};

export default AddSubscriberAccountForm;

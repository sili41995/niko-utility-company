import { BtnTypes, IconSizes, InputTypes } from '@/constants';
import { FC } from 'react';
import { IProps } from './AttachFileInput.types';
import {
  Accent,
  AltElemWrap,
  Container,
  Input,
  Label,
  ResetBtn,
  Title,
} from './AttachFileInput.styled';
import CsvFileIcon from '@/icons/csv.svg?react';
import { IoIosClose } from 'react-icons/io';

const AttachFileInput: FC<IProps> = ({
  targetFileExtension,
  onInputChange,
  file,
  resetFile,
}) => {
  const fileName = file ? file.name : '-';

  return (
    <Container>
      <Label>
        <AltElemWrap>
          <CsvFileIcon />
        </AltElemWrap>
        <Input
          type={InputTypes.file}
          accept={`.${targetFileExtension}`}
          onChange={onInputChange}
        />
      </Label>
      <Title>
        Файл: <Accent>{fileName}</Accent>
      </Title>
      {file && (
        <ResetBtn type={BtnTypes.button} onClick={resetFile}>
          <IoIosClose size={IconSizes.big} />
        </ResetBtn>
      )}
    </Container>
  );
};

export default AttachFileInput;

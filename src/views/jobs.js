import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import routes from '../routes';

const greenX = `#00c37d`;
const greenXX = `#baeada`;
// const greenXXX = `#e3f4ee`;
const title = `#464646`;
// const subtitle = `#959595`;

const Title = styled.h2`
  text-align: center;
  color: ${title};
  margin: 1rem;
  font-weight: bolder;
  font-size: xx-large;
`;

const Label = styled.div`
  align-self: center;
  width: 100%;
  border-radius: 1rem;
  text-align: center;
  background-color: ${greenXX};
  color: ${greenX};
  font-size: xx-large;
  font-weight: bolder;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Highlight = styled.p`
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  color: ${title};
  /* background-color: ${greenX}; */
  /* padding: 1rem; */
  @media screen and (max-width: 600px) {
    font-size: large;
  }
`;

const Important = styled.p`
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  color: red;
  padding: 1rem;
  @media screen and (max-width: 600px) {
    font-size: large;
  }
`;

// const Text = styled.p`
//   text-align: center;
//   color: ${subtitle};
//   font-size: large;
//   font-weight: 900;
//   margin: 1rem;
// `;

const TextBox = styled.div`
  align-self: center;
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const StyledButton = styled(Button)`
  align-self: center;
  color: white;
  background-color: ${greenX};
  outline: none;
  border: none;
  width: 100px;
  margin: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Page = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push(routes.login());
  };
  return (
    <Container className="top-margin">
      <Title>فوٹان جاب پورٹل میں خوش آمدید</Title>
      <Title>IF YOU HAVE ALREADY REGISTERED PLEASE LOGIN</Title>
      <StyledButton onClick={handleLogin}>Login</StyledButton>
      <TextBox>
        <Highlight>
          فوٹان جاب پورٹل اہل علاقہ سے بیروز گاری کے خاتمہ میں اہم کردار ادا کر
          رہا ہے
        </Highlight>
        <Important>
          یہاں پر رجسٹر ہونے والے اساتذہ کی جاب کسی نا کسی سکول میں یقینی ہوگی
          ان شاء اللہ۔
        </Important>
        <Highlight>
          یہاں رجسٹر کرنے سے فوٹان سکول میں سلیکشن بھی ہو سکتی ہے اور اس کے
          علاوہ علاقہ بھر کے سکولز یہاں رجسٹر ہیں اگر آپ کی تعلیمی تفصیلات و
          قابلیت ان کی جاب وکینسی کے مطابق ہوئی تو کوئی اور ادارہ بھی آپ کو بلا
          لےگا۔
        </Highlight>
        <Important>رجسٹر کرنے کے لیے نیچے دیے گئے بٹن پر کلک کریں</Important>
        <Highlight>
          نوٹ: یہاں دیے گئے آپ کے فون نمبرز اور ای میلز ہر لحاظ سے محفوظ ہوں گے
          کوئی بھی آپ سے رابطہ کے لیے صرف &quot; رابطہ &quot; کے بٹن پر کلک کر
          کے آپ کو ای میل اور sms بھیج سکتا ہے آپ کا فون نمبر کسی کو نظر نہیں
          آئے گا
        </Highlight>
      </TextBox>

      <Label>Register</Label>
    </Container>
  );
};

export default Page;

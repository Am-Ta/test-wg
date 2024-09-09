'use client';
import {H1} from '@wg/kit/h1';
import {Body1} from '@wg/kit/body1';
import {Button} from '@wg/kit/button';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightgray',
        direction: 'rtl',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '70%',
          flexDirection: 'column',
          border: '2px solid gray',
          padding: 20,
          gap: 20,
          borderRadius: 8,
        }}
      >
        <H1
          test={'test'}
          test1={'test1'}
        >
          لورم ایپسوم متن ساختگی
        </H1>
        <Body1>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی
        </Body1>
        <Button
          fullWidth
          color="primary"
          variant="contained"
        >
          تایید
        </Button>
      </div>
    </div>
  );
}

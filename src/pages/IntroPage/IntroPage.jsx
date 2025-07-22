import Header from "../../components/Header/Header";
// import Footer from "/src/components/Footer/Footer.jsx";
// import LoginRef from "../../components/LoginRef/LoginRef";
import PointListWithTitles from "../../components/PointListWithTitles/PointListWithTitles";

import "/src/App.css";
import "/src/pages/IntroPage/IntroPage.css";
import { benefits, steps } from "../../data";

export default function IntroPage() {
  return (
    <>
      <Header>
        {/* <LoginRef href="/intro#login-form">Войти через телеграм</LoginRef> */}
        {/* <LoginRef href="https://t.me/SmartZametkiBot">Войти через Telegram</LoginRef> */}
        {/* кнопку сюда */}
      </Header>
      <main>
        <div className="intro_block">
          <div className="intro_text">
            <p>
              <span>SmartNotes</span> — ваш умный помощник для заметок!
            </p>
            <p>
              Создавайте, храните и делитесь идеями в удобном и современном
              приложении, где забота о ваших мыслях и вдохновение всегда на
              первом месте.
            </p>
          </div>
          <div className="intro_img" />
        </div>

        <div className="intro_block">
          <div className="intro_img" />
          <div className="intro_text">
            <h3>Почему выбирают SmartNotes?</h3>
            <ul>
              {benefits.map((benefit) => (
                <PointListWithTitles key={benefit.title} {...benefit} />
              ))}
            </ul>
          </div>
        </div>

        <div className="intro_block">
          <div className="intro_text">
            <h3>Как это работает?</h3>
            <ol>
              {steps.map((step) => (
                <PointListWithTitles key={step.title} {...step} />
              ))}
            </ol>
          </div>
          <div className="intro_img" />
        </div>
      </main>
      {/* <Footer/> */}
    </>
  );
}

import "bulma/css/bulma.css";
import "./App.css";
import Menu from "./menu/menu";
import Menu1 from "./img/image1.jpg";
import Menu2 from "./img/image2.jpg";
import Menu3 from "./img/image3.jpg";
import Menu4 from "./img/image4.jpg";

function App() {
  return (
    <div className="App">
      <section class="hero is-info">
        <div class="hero-body">
          <p class="title" style={{ textAlign: "center" }}>
            Restaraurant Menu
          </p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div class="columns">
            <div class="column">
              <Menu
                image={Menu1}
                title="Dinner With Frieds"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque nihil
            dolor, quo laborum quas ipsam corrupti, hic quis repudiandae sapiente
            dolorum dignissimos quibusdam, nostrum ipsum fugiat veritatis nemo
            laboriosam!"
              />
            </div>
            <div class="column">
              <Menu
                image={Menu2}
                title="Dinner With Family"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque nihil
            dolor, quo laborum quas ipsam corrupti, hic quis repudiandae sapiente
            dolorum dignissimos quibusdam, nostrum ipsum fugiat veritatis nemo
            laboriosam!"
              />
            </div>
            <div class="column">
              <Menu
                image={Menu3}
                title="Dinner For Special Nights"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque nihil
            dolor, quo laborum quas ipsam corrupti, hic quis repudiandae sapiente
            dolorum dignissimos quibusdam, nostrum ipsum fugiat veritatis nemo
            laboriosam!"
              />
            </div>
            <div class="column">
              <Menu
                image={Menu4}
                title="Breakfeast"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque nihil
            dolor, quo laborum quas ipsam corrupti, hic quis repudiandae sapiente
            dolorum dignissimos quibusdam, nostrum ipsum fugiat veritatis nemo
            laboriosam!"
              />
            </div>
          </div>
        </section>
        <section className="section">
          <div class="columns">
            <div class="column">
              <Menu
                image={Menu1}
                title="Dinner With Frieds"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque nihil
            dolor, quo laborum quas ipsam corrupti, hic quis repudiandae sapiente
            dolorum dignissimos quibusdam, nostrum ipsum fugiat veritatis nemo
            laboriosam!"
              />
            </div>
            <div class="column">
              <Menu
                image={Menu2}
                title="Dinner With Family"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque nihil
            dolor, quo laborum quas ipsam corrupti, hic quis repudiandae sapiente
            dolorum dignissimos quibusdam, nostrum ipsum fugiat veritatis nemo
            laboriosam!"
              />
            </div>
            <div class="column">
              <Menu
                image={Menu3}
                title="Dinner For Special Nights"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque nihil
            dolor, quo laborum quas ipsam corrupti, hic quis repudiandae sapiente
            dolorum dignissimos quibusdam, nostrum ipsum fugiat veritatis nemo
            laboriosam!"
              />
            </div>
            <div class="column">
              <Menu
                image={Menu4}
                title="Breakfeast"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque nihil
            dolor, quo laborum quas ipsam corrupti, hic quis repudiandae sapiente
            dolorum dignissimos quibusdam, nostrum ipsum fugiat veritatis nemo
            laboriosam!"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

import Aboutsell from "../../components/selling/Aboutsell/Aboutsell";
import Become from "../../components/selling/Become/Become";
import Benifist from "../../components/selling/Benifits/Benifits";
import Ecommerce from "../../components/selling/Ecommerce/Ecommerce";
import Hope from "../../components/selling/Hope/Hope";
import MoreSell from "../../components/selling/MoreSell/MoreSell";
import Startselling from "../../components/selling/Startselling/Startselling";

function Sell() {
  return (
    <div>
      <Become />
      <Benifist />
      <MoreSell />
      <Hope />
      <Aboutsell />
      <Ecommerce />
      <Startselling />
    </div>
  );
}

export default Sell;

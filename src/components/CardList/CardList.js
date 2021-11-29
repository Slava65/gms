import Card from "../Card/Card";
import { memsList } from "../../constants/constants";

function CardList() {
  return (
    <section className="cardlist">
      <ul className="cardlist_memslist">
        {memsList.map((mem) => (
          <Card mem={mem} />
        ))}
      </ul>
    </section>
  );
}

export default CardList;

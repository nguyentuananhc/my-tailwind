import { useParams } from "react-router-dom";
import GridBody from "components/GridBody";

function Art() {
  let { id } = useParams();
  return (
    <div>
      <div className="flex">
        <div className="p-8 min-w-1/2">
          <h1>
            <p className="text-3xl font-bold">And Then What?</p>
            <p className="text-3xl font-bold">Life After the Schools</p>
          </h1>
          <span className="text-2xl">Promo Animation</span>
          <span className="text-2xl">{id}</span>
        </div>
        <div className="p-8 min-w-1/2">
          <div>
            <p>Client</p>
            <p>VCCA Magagzine</p>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, fugiat? Dicta natus earum dolor sed repellat eaque
                aliquid, enim deserunt quis, iure sequi. Nostrum odit sint quae
                aliquam illum ad.
              </p>
            </div>
            <p>Awards</p>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, fugiat? Dicta natus earum dolor sed repellat eaque
                aliquid, enim deserunt quis, iure sequi. Nostrum odit sint quae
                aliquam illum ad.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <GridBody />
      </div>
    </div>
  );
}

export default Art;

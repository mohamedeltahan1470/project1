import Alert from "./Components/UI/Alert/Alert";
import { BellRing, Ban , CloudCheck , Info   } from "lucide-react";

const App = () => {
  return (
    <div>
      <Alert
        type="alert-danger"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        veritatis similique perferendis repellat eaque illo nobis voluptatem
        obcaecati, dolorem blanditiis, commodi enim aspernatur esse corrupti
        voluptas deleniti recusandae quibusdam assumenda."
      />
         <Alert
        type="alert-info"
        icon={<Info  size={20} />}
        title="Something went wrong"
        description={
          <>
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        veritatis similique <a href="/">perferendis</a> repellat eaque illo nobis voluptatem
        obcaecati, dolorem blanditiis, commodi enim aspernatur esse corrupti
        voluptas deleniti recusandae quibusdam assumenda."
          </>
        }
      />
         <Alert
        type="alert-default"
        icon={<BellRing size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        veritatis similique perferendis repellat eaque illo nobis voluptatem
        obcaecati, dolorem blanditiis, commodi enim aspernatur esse corrupti
        voluptas deleniti recusandae quibusdam assumenda."
      />
         <Alert
        type="alert-success"
        icon={<CloudCheck  size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        veritatis similique perferendis repellat eaque illo nobis voluptatem
        obcaecati, dolorem blanditiis, commodi enim aspernatur esse corrupti
        voluptas deleniti recusandae quibusdam assumenda."
      />

       <Alert
        type="alert-success"
        icon={<CloudCheck  size={20} />}
        title="Something went wrong"
     
        
      >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        veritatis similique perferendis repellat eaque illo nobis voluptatem
        obcaecati, dolorem blanditiis, commodi enim aspernatur esse corrupti
        voluptas deleniti recusandae quibusdam assumenda.</p>
      </Alert>
    </div>
  );
};

export default App;

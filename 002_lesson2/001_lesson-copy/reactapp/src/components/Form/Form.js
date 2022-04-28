import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";

const Form = ({update}) => {
    const [formError, setFormError] = useState({});
    const {register, handleSubmit, watch, formState: {errors}} = useForm({resolver:joiResolver(CarValidator), mode:"onTouched"});

    const submit = async (car) => {
        try {
            const newCar = await carService.create(car);
            update(newCar)
        }catch (error){
            setFormError(error.response.data)
        }
    }

    watch(event => console.log(event))

    useEffect(()=>{
        console.log("formError after catching it on line 17", formError)
    },[formError])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>
                        Model:
                        <input type="text" defaultValue={''} {...register('model')}/>
                        {errors.model && <span>{errors.model.message}</span>}
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="text" defaultValue={''} {...register('price')}/>
                        {errors.price && <span>{errors.price.message}</span>}
                    </label>
                </div>
                <div>
                    <label>Year:
                        <input type="text" defaultValue={''} {...register('year')}/>
                        {errors.year && <span>{errors.year.message}</span>}
                    </label>
                </div>
                <br/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;
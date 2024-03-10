
import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseYear, chooseCarType } from "../redux/slices/RootSlice"

interface CarFormProps {
    id?: string[],

}

const CarForm = (props: CarFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset();
        }else{
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseYear(data.year));
            dispatch(chooseCarType(data.type));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 1000)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name ='make' placeholder="Car Make"/>
                </div>
                <div>
                    <label htmlFor="model">Car Model</label>
                    <Input {...register('model')} name ='model' placeholder="Car Model"/>
                </div>
                <div>
                    <label htmlFor="year">Car Year</label>
                    <Input {...register('year')} name ='year' placeholder="Car Year"/>
                </div>
                <div>
                    <label htmlFor="type">Car Type</label>
                    <Input {...register('type')} name ='type' placeholder="Car Type"/>
                </div>
                <div className="flex p-1">
                    <Button className="flex justify-start m-3 bg-gray-600 p-2 rounded hover:bg-gray-800 text-white">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CarForm

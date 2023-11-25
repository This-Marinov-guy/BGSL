import React from "react";
import { Field, ErrorMessage } from "formik";

const FormExtras = () => {
    return (
        <div className="row container mt--40">
            <div className="col-lg-12 col-md-12 col-12">
                <h3>Preferences</h3>
                <div className="rnform-group">
                    <Field as="select" name="menuType">
                        <option value="" disabled>
                            Select your main course
                        </option>
                        <option value="Moussaka">Moussaka</option>
                        <option value="Vegan stuffed peppers">Vegan stuffed peppers
                        </option>

                    </Field>
                    <ErrorMessage
                        className="error"
                        name="menuType"
                        component="div"
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
                <div className="rnform-group">
                    <Field as="select" name="dessert">
                        <option value="" disabled>
                            Select your dessert
                        </option>
                        <option value="Traditional biscuit cake">Traditional biscuit cake
                        </option>
                        <option value="Vegan biscuit cake">Vegan biscuit cake
                        </option>

                    </Field>
                    <ErrorMessage
                        className="error"
                        name="dessert"
                        component="div"
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
                <div className="rnform-group">
                    <Field type='text' name="allergies" placeholder="Any allergies"
                    >

                    </Field>

                </div>
            </div>
        </div>
    )
}

export default FormExtras
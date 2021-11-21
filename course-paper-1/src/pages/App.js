import { Home } from "./home";
import {Route, Routes} from "react-router-dom";
import District from "./district";
import district from "../geo-objects-info/districts.json";
import { useEffect, useState } from "react";

import axios from "axios";

export const App = () => {
    const [districts, setDistricts] = useState( district );
    const [isFetching, setIsFetching] = useState(false);

    // useEffect(() => {
    //     setIsFetching(true);
    //     const getDistricts = async () => {
    //         try {
    //             const response = await axios.get('https://api.jsonbin.io/v3/b/618561c53ea6754ce134d134/latest',
    //                 {
    //                     headers: {
    //                         'X-Master-Key': '$2b$10$AWIF1wPhgs5.Zq3CswguneGsUKTzsgXOgIlcIdbDl5E6/Cda6ck..',
    //                         'X-Bin-Meta': 'false'
    //                     }})
    //             setDistricts(response.data);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     };
    //     getDistricts();
    //     setIsFetching(false);
    // }, []);

    return (
        <div>
            {
                !isFetching &&
                <Routes>
                    <Route path="/" element={ <Home districts={ districts } /> }/>
                    {
                        districts.map( district => {
                            return (
                                <Route key={ district.id } path={ district.properties.url } element={
                                    <District title={ district.properties.name }
                                              description={ district.properties.description }
                                              pros={ district.properties.pros }
                                              cons={ district.properties.cons }
                                              images={ district.properties.images }
                                    />
                                }/>
                            )})
                    }
                </Routes>
            }

        </div>
    )
};
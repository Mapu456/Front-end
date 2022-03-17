import { Grid } from "@mui/material";
import Card from "../../../hoc/Card";
import classes from "./CreateNewKpi.module.css";
import CustomInputComp from "../../../hoc/custom-input/CustomInputComp";
import AddButtonComp from "../../../hoc/add-button/AddButtonComp";
import { useState } from "react";
import { Kpi, KpiAttribute } from "../../../types/Kpi";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import useKpiAxios from "../../../hooks/useKpiAxios";

const defaultKpi: Kpi = {
  id: "",
  name: "",
  und: "",
  labelType: "",
  total: [],
  labels: [],
  chartTypes: [],
  attributesGroupName: "",
  attributes: [],
  mainKpi: false,
};

const CreateNewKpi = (props: any) => {
  const [attributes, setAttributes] = useState<string[]>([]);
  const [kpiData, setKpiData] = useState<Kpi>(defaultKpi);

  const { kpiOperationLoading } = useSelector(
    (state: RootState) => state?.kpiReducer
  );

  const { user } = useSelector((state: RootState) => state?.userReducer);

  const { createKpiPointer, startKpiOperationPointer: startOperationPointer } =
    useKpiAxios();

  const saveInfoHandler = () => {
    const kpiDataCopy: Kpi = {
      ...kpiData,
      attributes: attributes.map((attributeName: string): KpiAttribute => {
        return { name: attributeName, values: [] };
      }),
    };
    //TODO Validate all the fields
    // console.log(kpiDataCopy);
    // console.log(user!.pymeId)
    createKpiPointer(kpiDataCopy, user!.pymeId);
    startOperationPointer();
  };

  const changeNameAttributeHandler = (e: any): void =>
    setKpiData({ ...kpiData, name: e.target.value });

  const changeAttributeUndHandler = (e: any): void =>
    setKpiData({ ...kpiData, und: e.target.value });


  return (
    <div>
      <Card width={50} padding={"1rem"}>
        <div>
          <div className={classes.title}>
            <p>Creacion del KPI</p>
          </div>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Facturación"}
                placeholder={"Ingrese el valor"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Unidad"}
                placeholder={"USD"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"ARR"}
                placeholder={"Ingrese el valor"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Unidad"}
                placeholder={"USD"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"EBITDA"}
                placeholder={"Ingrese el valor"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Unidad"}
                placeholder={"USD"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"GMV"}
                placeholder={"Ingrese el valor"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Unidad"}
                placeholder={"USD"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Empleados"}
                placeholder={"Ingrese el valor"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Unidad"}
                placeholder={"Numeró de personas"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Fundraising"}
                placeholder={"Ingrese el valor"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Unidad"}
                placeholder={"USD"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"CAC"}
                placeholder={"Ingrese el valor"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Unidad"}
                placeholder={"USD"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Clientes Activos"}
                placeholder={"Ingrese el valor"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputComp
                label={"Unidad"}
                placeholder={"Numeró de clientes"}
                change={(e: any) => changeAttributeUndHandler(e)}
              />
            </Grid>

            
          </Grid>
          {/* Create attribute component */}
          <div className={classes.saveButtonWrapper}>

            {kpiOperationLoading ? (
              <div className={classes.ldsSpinnerSmall}></div>
            ) : (
              <AddButtonComp name={"Guardar Datos"} click={saveInfoHandler} />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CreateNewKpi;

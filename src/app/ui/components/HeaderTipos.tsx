import { Button } from "@mui/material";
import SkeletonDefault from "./SkeletonDefault";

export default function HeaderTipos() {
    return (
        
            <div className='space-x-5 mb-5 mt-5'>
                <Button variant="contained">Novos</Button>
                <Button variant="contained" color='error'>Recusadas</Button>
                <Button variant="contained" color='warning'>Atenção</Button>
            </div>
        
    )
}
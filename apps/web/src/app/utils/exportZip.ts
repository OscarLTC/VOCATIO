import axios from "axios";
import { environment } from "../../environments/environment";

export const onExportZip = (id: string, name:string) => {
    axios
        .get(
        `${environment.apiUrl}/surveyProgramming/zip/${id}/`, { responseType: 'blob' }
        )
        .then((res) => {
            // Crear un objeto Blob con los datos recibidos
            const blob = new Blob([res.data], { type: 'application/zip' });

            // Crear un enlace de descarga
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${name}.zip`;

            // Hacer clic en el enlace para iniciar la descarga
            link.click();
        });
}
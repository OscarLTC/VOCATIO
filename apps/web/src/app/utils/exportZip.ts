import axios from 'axios';
import { environment } from '../../environments/environment';

export const onExportZip = (id: string, name: string) => {
  axios
    .get(`${environment.apiUrl}/surveyProgramming/zip/${id}/`, {
      responseType: 'blob',
    })
    .then((res) => {
      const blob = new Blob([res.data], { type: 'application/zip' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${name}.zip`;
      link.click();
    });
};

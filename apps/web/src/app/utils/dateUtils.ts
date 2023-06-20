export const getCustomDate = (months = 0) => {
  const currentDate = new Date();

  currentDate.setMonth(currentDate.getMonth() + months);

  const yearEnd = currentDate.getFullYear();
  const monthEnd = String(currentDate.getMonth() + 1).padStart(2, '0');
  const dayEnd = String(currentDate.getDate()).padStart(2, '0');
  const formattedEndDate = `${yearEnd}-${monthEnd}-${dayEnd}`;

  return formattedEndDate;
};

export const formatDate = (date: any) => {
  if (date) {
    const [year, month, day] = date.split('-');
    const dateObject = new Date(Number(year), Number(month) - 1, Number(day));
    return dateObject.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
};

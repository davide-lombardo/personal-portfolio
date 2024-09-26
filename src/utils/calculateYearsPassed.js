// Calculate experience based on a start date
export const calculateYearsPassed = (startDate) => {
  const currentYear = new Date().getFullYear();
  const startYear = new Date(startDate).getFullYear();
  return currentYear - startYear;
};


// const [developedYear, setDevelopedYear] = useState(0);

// // Use useEffect to calculate and set experiences on component mount
// useEffect(() => {
//   setDevelopedYear(calculateYearsPassed(developedYear));
//   setAngularExperience(calculateYearsPassed(angularStartDate))
//   setReactExperience(calculateYearsPassed(reactStartDate));
// }, []);
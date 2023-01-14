import releasedPattern from "../auxvars/releasedPattern.js";

const validateReleased = released => {
  const error0 = "If provided, 'released' format must be 'yyyy-mm-dd'.";
  const error1 = "If provided, 'released' cannot be later than current date.";
  if(released.length === 0) return "";
  if(!releasedPattern.test(released)) return error0;
  if(Date.parse(released) > Date.now()) return error1;
  return "";
};

export default validateReleased;
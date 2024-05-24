import { checkbox } from "@/recipes/checkbox";
import { css } from "../../styled-system/css";

export default function Home() {
  const classes = checkbox({ size: "sm" });

  return (
    <label className={classes.root}>
      <input type="checkbox" className={css({ srOnly: true })} />
      <div className={classes.control} />
      <span className={classes.label}>Checkbox Label</span>
    </label>
  );
}

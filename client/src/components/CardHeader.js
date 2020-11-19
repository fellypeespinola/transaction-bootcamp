import React from "react";
import css from "./cardheader.module.css";

export default function CardHeader({ name, value, icon, iconColor }) {
  return (
    <div className="col s3">
      <div className={css.cardHeaderContent}>
        <div className={css.cardHeaderInfo}>
          <span className={css.cardHeaderTitle}>{name}</span>
          <span className={css.cardHeaderValue} style={{ color: iconColor }}>
            {value}
          </span>
        </div>
        <div
          className={css.cardHeaderIcon}
          style={{ backgroundColor: iconColor }}
        >
          <i className="small material-icons">{icon}</i>
        </div>
      </div>
    </div>
  );
}

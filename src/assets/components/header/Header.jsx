import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    {
      id: 1,
      label: "A",
      items: [
        { id: 1, label: "A1" },
        { id: 2, label: "A2" },
        { id: 3, label: "A3" },
      ],
    },
    {
      id: 2,
      label: "B",
      items: [
        { id: 1, label: "B1" },
        { id: 2, label: "B2" },
        { id: 3, label: "B3" },
      ],
    },
  ];

  const handleOpenMenu = (itemId) => {
    if (itemId === openMenu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(itemId);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.menu}>
          <ul className={styles.menuItem}>
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  handleOpenMenu(item.id);
                }}
              >
                <div className={styles.menuItem__label}>
                  <span>{item.label}</span>{" "}
                  <span>
                    <FaChevronDown />
                  </span>
                </div>
                <div
                  className={`${styles.menuItem__dropdown} 
                  ${openMenu === item.id ? styles.open : ""}`}
                >
                  <ul className={styles.subMenuItem}>
                    {item.items.map((subItem) => (
                      <li key={subItem.id}>
                        <span>{subItem.label}</span>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.actions}>Actions</div>
      </div>
    </header>
  );
};

export default Header;
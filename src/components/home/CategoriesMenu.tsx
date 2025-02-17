import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCategories, fetchSubCategories } from "../../api/fetchCategories"; 


const CategoriesContainer = styled.div`
  position: sticky;
  top: 74px;
  z-index: 1000;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  padding: 10px 0;
  background: white;
  border-top: 1px solid #e4e4e4;
  
  @media (max-width: 1024px) {
    gap: 10px;
    padding: 8px 0;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px 0;
  }
`;

const CategoryWrapper = styled.div`
  position: relative;
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #74767e;
  font-weight: 600;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #1dbf73;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #1dbf73;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
  
`;

interface DropdownMenuProps {
  isVisible: boolean;
}

const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 250px;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  flex-direction: column;
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform-origin: top;
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: ${(props) => (props.isVisible ? "translateY(0)" : "translateY(10px)")};

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    box-shadow: none;
    border: none;
  }
`;

const GroupTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #333;
  padding: 8px 10px;
`;

const DropdownItem = styled(Link)`
  padding: 6px 10px;
  text-decoration: none;
  color: #74767e;
  font-size: 16px;
  font-weight: 400;
  display: block;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1dbf73;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CategoriesMenu: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [subCategories, setSubCategories] = useState<{ [key: string]: any[] }>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  const handleFetchSubCategories = async (categoryId: string) => {
    if (subCategories[categoryId] || loading[categoryId]) return;
    setLoading((prev) => ({ ...prev, [categoryId]: true }));

    const data = await fetchSubCategories(categoryId);
    setSubCategories((prev) => ({ ...prev, [categoryId]: data }));
    setLoading((prev) => ({ ...prev, [categoryId]: false }));
  };

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryWrapper
          key={category.id}
          onMouseEnter={() => {
            setHoveredCategory(category.id);
            handleFetchSubCategories(category.id);
          }}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <CategoryLink to={`/category/${category.id}`}>{category.tenLoaiCongViec}</CategoryLink>
          <DropdownMenu isVisible={hoveredCategory === category.id}>
            {loading[category.id] ? (
              <p>Loading...</p>
            ) : (
              subCategories[category.id]?.map((group, index) => (
                <div key={group?.id || index}>
                  <GroupTitle>{group?.tenNhom || "No name"}</GroupTitle>
                  {group?.dsChiTietLoai?.map((item: any, subIndex: number) => (
                    <DropdownItem key={item?.id || subIndex} to={`/jobs/${item?.id || "#"}`}>
                      {item?.tenChiTiet || "Unnamed"}
                    </DropdownItem>
                  ))}
                </div>
              ))
            )}
          </DropdownMenu>
        </CategoryWrapper>
      ))}
    </CategoriesContainer>
  );
};

export default CategoriesMenu;
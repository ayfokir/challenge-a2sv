'use client'

import React, { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  food_name: string;
  food_rating: string;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const FoodForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    food_name: "",
    food_rating: "",
    food_image: "",
    restaurant_name: "",
    restaurant_logo: "",
    restaurant_status: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.food_name) newErrors.food_name = "Food Name is required.";
    if (!formData.food_rating)
      newErrors.food_rating = "Food Rating is required.";
    else if (isNaN(Number(formData.food_rating)))
      newErrors.food_rating = "Food Rating must be a number.";

    if (!formData.food_image)
      newErrors.food_image = "Food Image URL is required.";
    if (!formData.restaurant_name)
      newErrors.restaurant_name = "Restaurant Name is required.";
    if (!formData.restaurant_logo)
      newErrors.restaurant_logo = "Restaurant Logo URL is required.";

    if (!formData.restaurant_status)
      newErrors.restaurant_status = "Restaurant Status is required.";
    else if (
      formData.restaurant_status !== "Open Now" &&
      formData.restaurant_status !== "Closed"
    ) {
      newErrors.restaurant_status =
        "Restaurant Status must be 'Open Now' or 'Closed'.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      setFormData({
        food_name: "",
        food_rating: "",
        food_image: "",
        restaurant_name: "",
        restaurant_logo: "",
        restaurant_status: ""
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="food_name" className="block font-semibold">
          Food Name
        </label>
        <input
          type="text"
          id="food_name"
          name="food_name"
          value={formData.food_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.food_name && (
          <p className="text-red-500 text-sm">{errors.food_name}</p>
        )}
      </div>

      <div>
        <label htmlFor="food_rating" className="block font-semibold">
          Food Rating
        </label>
        <input
          type="number"
          id="food_rating"
          name="food_rating"
          value={formData.food_rating}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.food_rating && (
          <p className="text-red-500 text-sm">{errors.food_rating}</p>
        )}
      </div>

      <div>
        <label htmlFor="food_image" className="block font-semibold">
          Food Image URL
        </label>
        <input
          type="text"
          id="food_image"
          name="food_image"
          value={formData.food_image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.food_image && (
          <p className="text-red-500 text-sm">{errors.food_image}</p>
        )}
      </div>

      <div>
        <label htmlFor="restaurant_name" className="block font-semibold">
          Restaurant Name
        </label>
        <input
          type="text"
          id="restaurant_name"
          name="restaurant_name"
          value={formData.restaurant_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.restaurant_name && (
          <p className="text-red-500 text-sm">{errors.restaurant_name}</p>
        )}
      </div>

      <div>
        <label htmlFor="restaurant_logo" className="block font-semibold">
          Restaurant Logo URL
        </label>
        <input
          type="text"
          id="restaurant_logo"
          name="restaurant_logo"
          value={formData.restaurant_logo}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.restaurant_logo && (
          <p className="text-red-500 text-sm">{errors.restaurant_logo}</p>
        )}
      </div>

      <div>
        <label htmlFor="restaurant_status" className="block font-semibold">
          Restaurant Status
        </label>
        <select
          id="restaurant_status"
          name="restaurant_status"
          value={formData.restaurant_status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Status</option>
          <option value="Open Now">Open Now</option>
          <option value="Closed">Closed</option>
        </select>
        {errors.restaurant_status && (
          <p className="text-red-500 text-sm">{errors.restaurant_status}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FoodForm;

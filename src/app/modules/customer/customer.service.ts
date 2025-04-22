import { Customer } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
type ICustomer = {
  name: string;
  email: string;
  phone: string;
};
const createCustomer = async (data: ICustomer) => {
  const customer = await prisma.customer.create({
    data,
  });
  return customer;
};

const getAllCustomer = async () => {
  const customer = await prisma.customer.findMany();
  return customer;
};

const getCustomerById = async (
  customerId: string
): Promise<Customer | null> => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  return result;
};
const updateCustomer = async (
  customerId: string,
  data: Partial<Customer>
): Promise<Customer | null> => {
  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data,
  });
  return result;
};

const deleteCustomer = async (customerId: string): Promise<Customer | null> => {
  const result = await prisma.customer.delete({
    where: {
      customerId,
    },
  });
  return result;
};
export const CustomerService = {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};

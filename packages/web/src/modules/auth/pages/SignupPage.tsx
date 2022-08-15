import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { FieldValues, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button,
	Box,
	Avatar,
	Flex,
	useDisclosure,
} from '@chakra-ui/react';
import useSignupMutation from '../hooks/useSignupMutation';
import { ArrowUpIcon } from '@chakra-ui/icons';
import useCroppedImage from '../../shared/hooks/useCropperImage';
import ImagePreview from '../../shared/components/ImagePreview';
import ImageCropper from '../../shared/components/ImageCropper';

interface SignupPageProps {
	path?: string;
}

const validationSchema = Yup.object()
	.shape({
		name: Yup.string().required('user must provide their name').trim(),
		email: Yup.string()
			.required('user must provide their email')
			.email('please provide a valid email')
			.trim(),
		password: Yup.string()
			.required('user must provide a password')
			.min(6, 'password must contain atleast 6 characters'),
		passwordConfirm: Yup.string()
			.required('users must confirm their password')
			.when('password', {
				is: (val: string) => (val && val.length > 0 ? true : false),
				then: Yup.string().oneOf(
					[Yup.ref('password')],
					'passwords do not match'
				),
			}),
	})
	.required();

const SignupPage: React.FC<SignupPageProps> = ({}) => {
	const { isLoading, mutate } = useSignupMutation();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const {
		image,
		setImage,
		showImageCropper,
		closeImageCropper,
		imageSettings,
		setImageSettings,
		imageUrl,
		setCroppedImage,
		croppedImage,
		resetValues,
	} = useCroppedImage();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (values: FieldValues) => {
		mutate({
			name: values.name,
			email: values.email,
			password: values.password,
			passwordConfirm: values.passwordConfirm,
			photo: image,
			imageSettings: JSON.stringify(imageSettings),
		});

		reset();
		resetValues();
	};

	return (
		<>
			<AuthLayout heading='Sign Up'>
				{image && imageUrl && (
					<ImageCropper
						showImageCropper={showImageCropper}
						closeImageCropper={closeImageCropper}
						imageSettings={imageSettings}
						setImageSettings={setImageSettings}
						photo={imageUrl}
						setCroppedImage={setCroppedImage}
					/>
				)}

				{croppedImage && (
					<ImagePreview
						imageUrl={croppedImage}
						isOpen={isOpen}
						onClose={onClose}
					/>
				)}

				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<FormControl mb='4' isRequired isInvalid={!!errors.name}>
						<FormLabel>Name</FormLabel>
						<Input {...register('name')} />
						<FormErrorMessage>
							{errors.name?.message as string}
						</FormErrorMessage>
					</FormControl>

					<FormControl mb='4' isRequired isInvalid={!!errors.email}>
						<FormLabel>Email address</FormLabel>
						<Input type='email' {...register('email')} />
						<FormErrorMessage>
							{errors.email?.message as string}
						</FormErrorMessage>
					</FormControl>

					<FormControl mb='4' isRequired isInvalid={!!errors.password}>
						<FormLabel>Password</FormLabel>
						<Input type='password' {...register('password')} />
						<FormErrorMessage>
							{errors.password?.message as string}
						</FormErrorMessage>
					</FormControl>

					<FormControl mb='4' isRequired isInvalid={!!errors.passwordConfirm}>
						<FormLabel>Password Confirm</FormLabel>
						<Input type='password' {...register('passwordConfirm')} />
						<FormErrorMessage>
							{errors.passwordConfirm?.message as string}
						</FormErrorMessage>
					</FormControl>

					<Flex justifyContent='space-between' alignItems='center'>
						<Button
							cursor='pointer'
							leftIcon={<ArrowUpIcon />}
							as='label'
							htmlFor='photo'
							size='sm'>
							Upload Profile Picture
						</Button>

						<input
							style={{ display: 'none' }}
							type='file'
							name='photo'
							id='photo'
							onChange={(e: any) => setImage(e.target.files[0])}
						/>

						<Box role='button' onClick={() => onOpen()}>
							{croppedImage && <Avatar size={'sm'} src={croppedImage} />}
						</Box>
					</Flex>

					<Button isLoading={isLoading} colorScheme='blue' type='submit' mt='6'>
						Create Account
					</Button>
				</form>
			</AuthLayout>
		</>
	);
};

export default SignupPage;

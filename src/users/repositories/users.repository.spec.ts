import { Test } from '@nestjs/testing';
import { UsersRepository } from './users.repository';

// describe('UsersRepository', () => {
//   let usersDB: UsersRepository;
//   const TITLE = 'users repository';

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [UsersRepository],
//     }).compile();

//     usersDB = module.get<UsersRepository>(UsersRepository);
//   });

//   it(`${TITLE} 1 > service should be defined`, () => {
//     expect(usersDB).toBeDefined();
//   });

//   it(`${TITLE} 2 > service should be defined`, async () => {
//     const data = await usersDB.findAll();
//     expect(data).toBeDefined();
//   });
// });

describe('UsersController', () => {
  let usersRepository: UsersRepository;
  let mockedRepository;

  const MOCKDATA_ALL = [
    {
      preferences: {
        language: 'ca',
      },
      _id: '6256851832fa9c667feb5cda',
      alias: 'Mr.Robot',
      activeGroups: [
        '23d605e2-fb38-4e7a-9ee5-4851fcfedb15',
        '190cde8a-3be0-406a-a24d-a6316af1b925',
      ],
      avatar: 'https://thispersondoesnotexist.com/image',
      likedActivities: ['ae40070d-6edd-4e95-aab7-8ad5a02ebc8a'],
      roles: ['teacher'],
      __v: 0,
    },
    {
      preferences: {
        language: 'ca',
      },
      _id: '6256866c32fa9c667feb5cdb',
      alias: 'Darleene',
      avatar: 'https://thispersondoesnotexist.com/image',
      activeGroups: ['9e26ab71-a2d0-43b5-b0fa-38910b7ebe1b'],
      roles: ['student'],
      likedActivities: ['120460f9-5a23-4050-95a9-4f9d1de87672'],
      __v: 0,
    },
    {
      preferences: {
        language: 'ca',
      },
      _id: '625d16c40d3a3e920b8726e2',
      alias: 'Miky Mouse & cia',
      avatar: 'https://thispersondoesnotexist.com/image',
      activeGroups: ['9e26ab71-a2d0-43b5-b0fa-38910b7ebe1b'],
      roles: ['teacher'],
      likedActivities: ['120460f9-5a23-4050-95a9-4f9d1de87672'],
      __v: 0,
    },
  ];

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: UsersRepository, useValue: mockedRepository }],
    }).compile();

    usersRepository = moduleRef.get<any>(UsersRepository);
  });

  // afterEach(() => {
  //   mockedRepository.mockRestore();
  // });

  beforeAll(() => {
    mockedRepository = {
      findAll: jest.fn(() => Promise.resolve([...MOCKDATA_ALL])),
    };
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('findAll', () => {
    it('should return an array of Users', async () => {
      jest.spyOn(usersRepository, 'findAll');

      const result = await usersRepository.findAll();

      expect(result).toStrictEqual(MOCKDATA_ALL);
    });
  });
});
